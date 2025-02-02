from django.urls import path
from .views import CustomTokenObtainPairView,CustomTokenRefreshView,check_token_authenticity,RegisterUser

urlpatterns = [    
    path('api/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),    
    path('api/check_token_authenticity', check_token_authenticity, name='check_token_authenticity'),
    path('api/register/', RegisterUser, name='register_user'),    
    # path('api/set_student_creds_1', SetStudentCreds1, name='SetStudentCreds1'),
    # path('api/set_student_creds_2', SetStudentCreds2, name='SetStudentCreds1'),
    # path('api/set_student_creds_3', SetStudentCreds3, name='SetStudentCreds3'),
    # path('api/set_student_creds_4', SetStudentCreds4, name='SetStudentCreds4'),    
    # path('api/set_student_creds_5', SetStudentCreds5, name='SetStudentCreds5'),
]
