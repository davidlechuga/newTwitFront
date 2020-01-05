import React from 'react'

function Contact () {
  return(
    <form>
      <div className='form-row'>
        <div className='form-group col-md-6'>
          <label htmlFor='fullName'>Nombre completo</label>
          <input type='text' className='form-control' id='fullName' placeholder='Nombre'/>
        </div>
        <div className='form-group col-md-6'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='form-control' id='email' placeholder='Email'/>
        </div>
      </div>
      <div className='form-group'>
        <label htmlFor='phone'>Teléfono</label>
        <input type='number' className='form-control' id='phone' placeholder='Dirección' maxLength='10'/>
      </div>
      <div className='form-row'>
        <div className='form-group col-md-6'>
          <label htmlFor='city'>Localidad</label>
          <input type='text' className='form-control' id='city'/>
        </div>
        <div className='form-group col-md-2'>
          <label htmlFor='comment'>Comentarios</label>
          <textarea className="form-control" id="comment" rows="5"></textarea>
        </div>
      </div>
      <button type='submit' className='btn btn-primary'>Enviar</button>
    </form>

  )
}

export default Contact