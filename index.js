const aumentar = document.getElementById("aumentar");
const eliminar = document.getElementById("eliminar");

const alert = () => {
  Swal.fire({
    title: "Estas seguro?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "SI",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};

aumentar.onclick = alert;
eliminar.onclick = alert;
