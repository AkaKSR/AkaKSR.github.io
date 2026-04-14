// === TOAST NOTIFICATION SYSTEM ===
ManaEmpire.toast = {

  show: function (icon, name) {
    var container = document.getElementById('toast-container');
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<div class="toast-title">' + icon + ' ' + name + '</div><div>업적 달성!</div>';
    container.appendChild(toast);
    setTimeout(function () {
      toast.classList.add('removing');
      setTimeout(function () { toast.remove(); }, 400);
    }, 3000);
  }
};
