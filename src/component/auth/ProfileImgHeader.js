import React from 'react'

const ProfileImgHeader = ({title}) => {
  return (
    <section id="top" className="profile-page-banner mb-5" >
    <div className="overlay"></div>
    <div className="container">
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="page-title">
                    <h1 className="page-headding" >{title}</h1>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ProfileImgHeader
