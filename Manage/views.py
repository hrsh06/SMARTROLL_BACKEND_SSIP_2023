from asyncio import Semaphore
from sqlite3 import DataError
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from django.http import JsonResponse
from Manage.models import Branch, Division, Semester
from StakeHolders.models import Admin,Teacher
from .serializers import BatchSerializer,SemesterSerializer,SubjectSerializer,DivisionSerializer
# from StakeHolders.serializers import TeacherSerializer
# from Manage.models import Batch,Semester,Subject
# from datetime import datetime
# from django.db import transaction
# from rest_framework import serializers
from django.contrib.auth import get_user_model
# Create your views here.

User = get_user_model()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_object_counts(request):
    try:        
        if request.user.role == 'admin':
            data = {'semesters':0,'divisons':0,'batches':0}
            admin_obj = Admin.objects.get(profile=request.user)
            # We'll have to get the counts of semester, divisions, batches
            branch = admin_obj.branch_set.first()
            semesters = branch.semester_set.all()
            semester_count = len(semesters)
            divisions = []
            for i in semesters:
                sem_divs = i.division_set.all()
                divisions.extend(sem_divs)
            division_count = len(divisions)
            batches = []
            for i in divisions:
                div_batches = i.batch_set.all()
                batches.extend(div_batches)
            batch_count = len(batches)            
            data['semesters'] = semester_count
            data['divisons'] = division_count
            data['batches'] = batch_count
            return JsonResponse(data,status=200)
        else:
            data = {"data":"You're not allowed to perform this action"}
            return JsonResponse(data,status=401)
    except Exception as e:
        data = {"data":str(e)}
        return JsonResponse(data,status=500)
    
     
@api_view(['POSt'])
@permission_classes([IsAuthenticated])
def add_divisions(request):
    try:    
        data = {'data':None,'error':False,'message':None}    
        if request.user.role == 'admin':
            body = request.data
            admin_obj = Admin.objects.get(profile=request.user)
            # We'll have to get the counts of semester, divisions, batches
            # branch_obj = admin_obj.branch_set.first()
            # branch_obj = Branch.objects
            if 'division_name' in body and 'semester' in body and 'semester_slug' in body :
                semester_obj = Semester.objects.filter(slug=body['semester_slug']).first()
                if semester_obj and semester_obj.branch.admins.contains(admin_obj):
                    division_obj,created = Division.objects.get_or_create(division_name = body['division_name'],semester=semester_obj)
                    if created:
                        division_serialized = DivisionSerializer(division_obj)
                        data['data'] = division_serialized.data
                        return JsonResponse(data,status=200)
                    else:
                        raise Exception('division already added')
                else:
                    raise Exception("This Semester does not exist")
            else:
                raise Exception("Add all the credentials")            
            
        else:
            data['message'] = "You're not allowed to perform this action"
            data['error'] = True
            return JsonResponse(data,status=401)
    except Exception as e:
        data['message'] = str(e)
        data['error'] = True
        print(e)
        return JsonResponse(data,status=500)