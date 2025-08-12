import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface HolidayCalenderDTO {
  date: string;
  name: string;
}

export interface DashboardSummaryDTO {
  totalEmployees: number;
  totalResignations: number;
  upcomingHolidays: HolidayCalenderDTO[];
}

export interface HolidayEntity {
  holidayId?: string;
  holidayName: string;
  date: string;
  description: string;
}

export interface HolidayRequest {
  holidayName: string;
  date: string;
  description: string;
}
export interface ForgotPasswordRequest {
  email: string;
  newPassword: string;
  retypeNewPassword: string;
}
export interface AnnouncementRequest {
  title: string;
  description: string;
  date: string;
}
export interface AnnouncementEntity {
  announcementId?: string;
  title: string;
  description: string;
  date: string;
}  
 export interface ProfileResponse {
  empId: string;
  firstName: string;
  lastName: string;
  department: string;
  role: string;
  mobile: string;
  email: string;
  joiningDate: string;
  address: string;
}

export interface MeetingRequest {
  date: string;
  topic: string;
  attendees: string[];
  conclusion: string;
}

export interface MeetingEntity extends MeetingRequest {
  meetingId?: string;
}
export interface ResignationRequest {
  empId: string;
  resignationDate: string;
  reason: string;
}

export interface ResignationEntity extends ResignationRequest {
  resignationId?: string;
  status: string; // e.g., Pending, Approved, Rejected
}

// ---- Employee Basic Interface for Dropdown ----
export interface EmployeeDropdownDTO {
  empId: string;
  firstName: string;
  lastName: string;
}

export interface LetterEntity {
  letterId?: string;
  empName: string;
  letterType: string;
  fileName: string;
  uploadDate: string;
}

export interface UploadLetterRequest {
  employeeName: string;
  letterType: string;
  file: File;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8446/api';

  constructor(private http: HttpClient) {}

  login(loginData: LoginRequest): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.apiUrl}/login`, loginData);
  }

  getDashboardSummary(): Observable<ApiResponse<DashboardSummaryDTO>> {
    return this.http.get<ApiResponse<DashboardSummaryDTO>>(`${this.apiUrl}/dashboard/summary`);
  }
   getAllHolidays(): Observable<ApiResponse<HolidayEntity[]>> {
    return this.http.get<ApiResponse<HolidayEntity[]>>(`${this.apiUrl}/holidays`);
  }
  getHolidayById(holidayId: string): Observable<ApiResponse<HolidayEntity>> {
    return this.http.get<ApiResponse<HolidayEntity>>(`${this.apiUrl}/holidays/${holidayId}`);
  }
   createHoliday(request: HolidayRequest): Observable<ApiResponse<HolidayEntity>> {
    return this.http.post<ApiResponse<HolidayEntity>>(`${this.apiUrl}/holidays`, request);
  }
  updateHoliday(holidayId: string, request: HolidayRequest): Observable<ApiResponse<HolidayEntity>> {
    return this.http.put<ApiResponse<HolidayEntity>>(`${this.apiUrl}/holidays/${holidayId}`, request);
  }

  deleteHoliday(holidayId: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/holidays/${holidayId}`);
  }
  forgotPassword(request: ForgotPasswordRequest): Observable<ApiResponse<any>> {
  return this.http.put<ApiResponse<any>>(`${this.apiUrl}/forgot`, request);
}
getAllAnnouncements(): Observable<ApiResponse<AnnouncementEntity[]>> {
  return this.http.get<ApiResponse<AnnouncementEntity[]>>(`${this.apiUrl}/announcement`);
}

createAnnouncement(request: AnnouncementRequest): Observable<ApiResponse<AnnouncementEntity>> {
  return this.http.post<ApiResponse<AnnouncementEntity>>(`${this.apiUrl}/announcement`, request);
}

deleteAnnouncement(announcementId: string): Observable<ApiResponse<void>> {
  return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/announcement/${announcementId}`);
}

updateAnnouncement(announcementId: string, request: AnnouncementRequest): Observable<ApiResponse<AnnouncementEntity>> {
  return this.http.put<ApiResponse<AnnouncementEntity>>(`${this.apiUrl}/announcement/${announcementId}`, request);
} 
  getProfile(empId: string): Observable<ApiResponse<ProfileResponse>> {
    return this.http.get<ApiResponse<ProfileResponse>>(`${this.apiUrl}/employees/profile?empId=${empId}`);
  }
  updateProfile(data: any) {
  return this.http.put<{ status: string }>(`http://localhost:8080/api/employee/update`, data);
}
createMeeting(request: MeetingRequest): Observable<ApiResponse<MeetingEntity>> {
  return this.http.post<ApiResponse<MeetingEntity>>(`${this.apiUrl}/meeting`, request);
} // ---- New Resignation Methods ----
  getAllResignations(): Observable<ApiResponse<ResignationEntity[]>> {
    return this.http.get<ApiResponse<ResignationEntity[]>>(`${this.apiUrl}/resignations`);
  }

  getResignationById(resignationId: string): Observable<ApiResponse<ResignationEntity>> {
    return this.http.get<ApiResponse<ResignationEntity>>(`${this.apiUrl}/resignations/${resignationId}`);
  }

  createResignation(request: ResignationRequest): Observable<ApiResponse<ResignationEntity>> {
    return this.http.post<ApiResponse<ResignationEntity>>(`${this.apiUrl}/resignations`, request);
  }

  updateResignation(resignationId: string, request: ResignationRequest): Observable<ApiResponse<ResignationEntity>> {
    return this.http.put<ApiResponse<ResignationEntity>>(`${this.apiUrl}/resignations/${resignationId}`, request);
  }

  deleteResignation(resignationId: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/resignations/${resignationId}`);
  }

  // ---- Fetch Employee List for Dropdown ----
  getEmployeeDropdownList(): Observable<ApiResponse<EmployeeDropdownDTO[]>> {
    return this.http.get<ApiResponse<EmployeeDropdownDTO[]>>(`${this.apiUrl}/employees/dropdown`);
  }getAllLetters(): Observable<ApiResponse<LetterEntity[]>> {
  return this.http.get<ApiResponse<LetterEntity[]>>(`${this.apiUrl}/letters`);
}

uploadLetter(formData: FormData): Observable<ApiResponse<LetterEntity>> {
  return this.http.post<ApiResponse<LetterEntity>>(`${this.apiUrl}/letters/upload`, formData);
}

deleteLetter(letterId: string): Observable<ApiResponse<void>> {
  return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/letters/${letterId}`);
}

downloadLetter(letterId: string) {
  return this.http.get(`${this.apiUrl}/letters/download/${letterId}`, { responseType: 'blob' });
}
}
