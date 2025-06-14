console.log("مرحباً بك في موقعي الشخصي!");
function sendWhatsApp() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var fullMessage =
        "الاسم: " + name + "%0A" +
        "رقم الهاتف: " + phone + "%0A" +
        "الرسالة: " + message;

    var url = "https://wa.me/96551014962?text=" + fullMessage;

    window.open(url, '_blank');
}
function showComponent(id) {
    const sections = document.querySelectorAll('.component-section');
    sections.forEach(section => section.style.display = 'none');

    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block';
    }
}
