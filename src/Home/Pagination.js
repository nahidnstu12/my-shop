import React from 'react'

function Pagination({perPage,totalProducts,paginate}) {
    const pageNumber = [];
    for(let i = 1;i<= Math.ceil(totalProducts/perPage);i++){
        pageNumber.push(i);
    }
    return (
        <nav style={{ display:"flex",justifyContent:"center",marginTop:"25px"}}>
            <ul className="pagination">
                {pageNumber.map(numb => (
                    <li key={numb} className="page-item">
                        <a href="#!" className="page-link" onClick={()=>paginate(numb)}>{numb}</a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Pagination
