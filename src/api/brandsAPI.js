import {useState, useEffect } from 'react';
import axios from 'axios';

function BrandsAPI() {
    const [brands, setBrands] = useState([]);
    const [callback, setCallback] = useState(false);
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [result, setResult] = useState(0);
    
    useEffect(() => {
        const getBrands = async () => {
            const res = await axios.get(`/api/brands?limit=${page*9}&${category}&${sort}&name[regex]=${search}`)
            setBrands(res.data.brands)
            setResult(res.data.result)
        }
        getBrands()
    }, [callback, category, sort, search, page]);

    return {
        brands: [brands, setBrands],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default BrandsAPI