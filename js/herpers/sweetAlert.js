
export const mostrarError = (mensaje) => {
  Swal.fire({
    icon: 'error',
    title: 'Atención',
    text: mensaje,
    confirmButtonColor: '#212529' 
  });
};