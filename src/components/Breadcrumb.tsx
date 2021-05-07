import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Breadcrumb({path}:{path:string}) {
  return (
    <BreadCrumb>
      <Link to={'/'}>Hotels/</Link>
      <Link to={path}>Application</Link>
    </BreadCrumb>
  )
}

export default Breadcrumb

const BreadCrumb = styled.div`
box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);
padding:10px;
display:block;
`