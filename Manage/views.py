from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from django.http import JsonResponse
from StakeHolders.models import Admin,Teacher
from .serializers import SemesterSerializer
# from StakeHolders.serializers import TeacherSerializer
from Manage.models import Semester,Branch
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
    

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_semester(request):
    try:        
        data = {'data':None,'error':False,'message':None}
        if request.user.role == 'admin':  
            body = request.data
            if 'no' in body and 'start_year' in body and 'end_year' in body:
                admin_obj = Admin.objects.get(profile=request.user)
                # We'll have to get the counts of semester, divisions, batches
                branch_obj = admin_obj.branch_set.first()
                if branch_obj:
                    semester_obj,created = Semester.objects.get_or_create(no=body['no'],branch=branch_obj)
                    if created:
                        semester_obj.start_year =body['start_year']
                        semester_obj.end_year = body['end_year']
                        semester_obj.save()
                        semester_serialized = SemesterSerializer(semester_obj)
                        data['data'] = semester_serialized.data
                        return JsonResponse(data,status=200)
                    else:
                        raise Exception('Semester already added')
                else:
                    raise Exception('No branch found')
            else:
                raise Exception('Provide all the parameters')                        
        else:
            data['error'] = True
            data['message'] = "You're not allowed to perform this action"            
    except Exception as e:
        data['error'] = True
        data['message'] = str(e)
        return JsonResponse(data,status=500)    
        

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_semesters(request):
    try:        
        data = {'data':None,'error':False,'message':None}
        if request.user.role == 'admin':              
            admin_obj = Admin.objects.get(profile=request.user)
            # We'll have to get the counts of semester, divisions, batches
            branch_obj = admin_obj.branch_set.first()
            semesters = branch_obj.semester_set.all().filter(status=True)
            if semesters.exists():
                semesters_serialized = SemesterSerializer(semesters,many=True)
                data['data'] = semesters_serialized.data
            else:
                raise Exception('Semester Does Not Exists')
        else:
            data['error'] = True
            data['message'] = "You're not allowed to perform this action"            
    except Exception as e:
        data['error'] = True
        data['message'] = str(e)
    finally:
        return JsonResponse(data,status=500)
    
