// Using local API backend - No Supabase
// All requests go to http://localhost:3001/api
const API_URL = 'http://localhost:3001/api';

// Helper function for API calls
const api = {
  async get(endpoint: string) {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return response.json();
  },
  async post(endpoint: string, data: any) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return response.json();
  },
  async delete(endpoint: string, data?: any) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: data ? JSON.stringify(data) : undefined,
    });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return response.json();
  },
};

export const complaintService = {
  async getComplaints() {
    return api.get('/complaints');
  },
  async createComplaint(complaint: any) {
    return api.post('/complaints', complaint);
  },
  async deleteComplaint(id: string) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return api.delete(`/complaints/${id}`, {
      userId: user.id,
      userRole: user.role
    });
  },
};

export const noticeService = {
  async getNotices() {
    return api.get('/notices');
  },
  async createNotice(notice: any) {
    return api.post('/notices', notice);
  },
  async deleteNotice(id: string) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return api.delete(`/notices/${id}`, {
      userId: user.id,
      userRole: user.role
    });
  },
};

export const marketplaceService = {
  async getItems() {
    return api.get('/marketplace');
  },
  async createItem(item: any) {
    return api.post('/marketplace', item);
  },
  async deleteItem(id: string) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return api.delete(`/marketplace/${id}`, {
      userId: user.id,
      userRole: user.role
    });
  },
};

export const animalWelfareService = {
  async getReports() {
    return api.get('/animal-welfare');
  },
  async createReport(report: any) {
    return api.post('/animal-welfare', report);
  },
  async deleteReport(id: string) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return api.delete(`/animal-welfare/${id}`, {
      userId: user.id,
      userRole: user.role
    });
  },
};

export const facultySuggestionService = {
  async getSuggestions() {
    return api.get('/faculty-suggestions');
  },
  async createSuggestion(suggestion: any) {
    return api.post('/faculty-suggestions', suggestion);
  },
  async deleteSuggestion(id: string) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return api.delete(`/faculty-suggestions/${id}`, {
      userId: user.id,
      userRole: user.role
    });
  },
};

export const bloodDonationService = {
  async getDonors() {
    return api.get('/blood-donation');
  },
  async createDonor(donor: any) {
    return api.post('/blood-donation', donor);
  },
  async deleteDonor(id: string) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return api.delete(`/blood-donation/${id}`, {
      userId: user.id,
      userRole: user.role
    });
  },
};

export const bicycleService = {
  async getReports() {
    return api.get('/bicycles');
  },
  async createReport(report: any) {
    return api.post('/bicycles', report);
  },
  async deleteReport(id: string) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return api.delete(`/bicycles/${id}`, {
      userId: user.id,
      userRole: user.role
    });
  },
};

export const lostFoundService = {
  async getItems() {
    return api.get('/lost-found');
  },
  async createItem(item: any) {
    return api.post('/lost-found', item);
  },
  async deleteItem(id: string) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return api.delete(`/lost-found/${id}`, {
      userId: user.id,
      userRole: user.role
    });
  },
};

