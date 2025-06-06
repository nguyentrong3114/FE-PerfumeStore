import api from "@/lib/api";

export const ProductService = {
    getAll : () =>{
        return api.get('/products')
    },
    getFiltered: (filters: {
      categorySlug?: string;
        brand?: string;
        priceRange?: string;
        notes?: string;
      }) => {
        const params: any = {};
    
        if (filters.categorySlug && filters.categorySlug !== 'all') {
          params.categorySlug = filters.categorySlug;
        }
    
        if (filters.brand && filters.brand !== 'all') {
          params.brand = filters.brand;
        }
    
        if (filters.priceRange && filters.priceRange !== 'all') {
          const [min, max] = filters.priceRange.split("-");
          params.priceMin = parseFloat(min);
          if (max) {
            params.priceMax = parseFloat(max);
          }
        }
    
        if (filters.notes && filters.notes !== 'all') {
          params.notes = filters.notes;
        }
    
        return api.get('/products', { params });
    },
    getById: (id: number) => {
        return api.get(`/products/${id}`);
    }
}