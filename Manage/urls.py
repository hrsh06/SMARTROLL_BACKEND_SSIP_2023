from django.urls import path,include
from .views import get_active_terms_for_superadmin,get_object_counts,add_semester,get_semesters,add_division,add_batch,get_batches,get_divisions,add_teacher,get_teachers,get_subjects,add_subject,get_timetable,get_lecture_configs,add_lecture_to_schedule,upload_students_data,get_terms,add_term,get_timetable_for_teacher,get_timetable_for_student,get_subjects_of_teacher,get_lecture_sessions_for_teacher,activate_teacher_acount,add_lecture_as_proxy,set_web_push_subscription,save_web_push_subscription,set_new_password_for_student,get_subjects_of_teacher_by_admin,get_lecture_sessions_for_teacher_by_admin,get_branches_of_teacher,get_semesters_from_branch,get_divisons_from_semesters,get_batches_from_divison,get_batches_from_semester,get_batches_from_subject,get_subjects_of_student,upload_master_timetable,get_streams,get_divisions_from_stream,get_semsters_from_stream,add_subjects_to_semester,get_subjects_from_acedemic_year,get_teachers_subject_choices,get_students_subject_choices
urlpatterns = [        
    path('get_active_terms_for_superadmin',get_active_terms_for_superadmin,name='get_active_terms_for_superadmin'),
    path('get_object_counts',get_object_counts,name='get_object_counts'),
    path('add_term/',add_term,name='add_term'),
    path('get_terms',get_terms,name='get_terms'),
    path('add_semester/',add_semester,name='add_semester'),
    path('activate_teacher_acount/',activate_teacher_acount,name='activate_teacher_acount'),
    path('set_new_password_for_student/',set_new_password_for_student,name='set_new_password_for_student'),
    path('get_semesters',get_semesters,name='get_semesters'),
    path('add_division/',add_division,name='add_division'),
    path('get_subject',get_subjects,name='get_subjects'),
    path('add_subject/',add_subject,name='add_subject'),
    path('add_batch/',add_batch,name='add_batch'),
    path('get_batches',get_batches,name='get_batches'),
    path('get_divisions',get_divisions,name='get_divisions'),
    path('add_teacher/',add_teacher,name='add_teacher'),
    path('get_teacher',get_teachers,name='get_teachers'),
    path('get_timetable/<str:division_slug>',get_timetable,name='get_timetable'),
    path('get_lecture_configs',get_lecture_configs,name='get_lecture_configs'),
    path('add_lecture_to_schedule/',add_lecture_to_schedule,name='add_lecture_to_schedule'),
    path('add_lecture_as_proxy/',add_lecture_as_proxy,name='add_lecture_as_proxy'),
    path('upload_students_data/',upload_students_data,name='upload_students_data'),
    path('get_timetable_for_teacher',get_timetable_for_teacher,name='get_timetable_for_teacher'),
    path('get_timetable_for_student',get_timetable_for_student,name='get_timetable_for_student'),
    path('get_subjects_of_teacher',get_subjects_of_teacher,name='get_subjects_of_teacher'),
    path('get_subjects_of_teacher_by_admin',get_subjects_of_teacher_by_admin,name='get_subjects_of_teacher_by_admin'),
    path('get_subjects_of_student',get_subjects_of_student,name='get_subjects_of_student'),
    path('get_lecture_sessions_for_teacher',get_lecture_sessions_for_teacher,name='get_lecture_sessions_for_teacher'),
    path('get_lecture_sessions_for_teacher_by_admin',get_lecture_sessions_for_teacher_by_admin,name='get_lecture_sessions_for_teacher_by_admin'),
    path('set_web_push_subscription',set_web_push_subscription,name='set_web_push_subscription'),
    path('save_web_push_subscription/',save_web_push_subscription,name='save_web_push_subscription'),
    path('get_branches_of_teacher',get_branches_of_teacher,name='get_branches_of_teacher'),
    path('get_semesters_from_branch/<str:branch_slug>',get_semesters_from_branch,name='get_semesters_from_branch'),
    path('get_divisons_from_semester/<str:semester_slug>',get_divisons_from_semesters,name='get_divisons_from_semester'),
    path('get_batches_from_divison/<str:divison_slug>',get_batches_from_divison,name='get_batches_from_divison'),
    path('get_batches_from_semester/<str:semester_slug>',get_batches_from_semester,name='get_batches_from_semester'),
    path('upload_master_timetable/',upload_master_timetable,name='upload_master_timetable'),
    path('get_streams',get_streams,name='get_streams'),        
    path('add_subjects_to_semester/',add_subjects_to_semester,name='add_subjects_to_semester'),
    path('get_subjects_from_acedemic_year/<str:semester_slug>/<str:acedemic_year>',get_subjects_from_acedemic_year,name='get_subjects_from_acedemic_year'),
    path('get_semsters_from_stream/<str:stream_slug>',get_semsters_from_stream,name='get_semsters_from_stream'),
    path('get_divisions_from_stream/<str:stream_slug>',get_divisions_from_stream,name='get_divisions_from_stream'),
    path('get_teachers_subject_choices/<str:semester_slug>',get_teachers_subject_choices,name='get_teachers_subject_choices'),
    path('get_students_subject_choices',get_students_subject_choices,name='get_students_subject_choices'),
    path('session/',include('Session.urls'),name='session_management'),
    path('alerts/',include('Alerts.urls'),name='alert_management'),
]