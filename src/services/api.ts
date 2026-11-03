export const API_BASE_URL = 'https://jinkahome.onrender.com/api';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchProductBySlug = async (slug: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${slug}/`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product ${slug}:`, error);
    return null;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const fetchSpecialties = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/specialties/`);
    if (!response.ok) throw new Error('Failed to fetch specialties');
    return await response.json();
  } catch (error) {
    console.error('Error fetching specialties:', error);
    return [];
  }
};

export const fetchGallery = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/gallery/`);
    if (!response.ok) throw new Error('Failed to fetch gallery');
    return await response.json();
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return [];
  }
};

export const fetchReviews = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews/`);
    if (!response.ok) throw new Error('Failed to fetch reviews');
    return await response.json();
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};

export const createReview = async (data: { name: string; text: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create review');
    return await response.json();
  } catch (error) {
    console.error('Error creating review:', error);
    return null;
  }
};

export const updateReview = async (id: number, data: { name: string; text: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update review');
    return await response.json();
  } catch (error) {
    console.error('Error updating review:', error);
    return null;
  }
};
