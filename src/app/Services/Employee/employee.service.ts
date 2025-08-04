// src/app/services/employee.service.ts

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
}
