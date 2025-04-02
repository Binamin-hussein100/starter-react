const API_URL = 'http://localhost:5000';

export async function getAllStudents() {
  const response = await fetch(`${API_URL}/students`);
  if (!response.ok) {
    throw new Error('Failed to fetch students');
  }
  return response.json();
}

export async function getStudent(id) {
  const response = await fetch(`${API_URL}/students/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch student');
  }
  return response.json();
}

export async function createStudent(name) {
  const response = await fetch(`${API_URL}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  if (!response.ok) {
    throw new Error('Failed to create student');
  }
  return response.json();
}

export async function updateStudent(id, name) {
  const response = await fetch(`${API_URL}/students/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  if (!response.ok) {
    throw new Error('Failed to update student');
  }
  return response.json();
}

export async function deleteStudent(id) {
  const response = await fetch(`${API_URL}/students/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete student');
  }
}
