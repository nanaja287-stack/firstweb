/* ================================
   🔐 فحص تسجيل الدخول
================================ */
function checkLogin() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // فحص عدم الفراغ
    if (username === "" || password === "") {
        alert("الرجاء تعبئة جميع الحقول");
        return false;
    }

    // فحص اسم المستخدم يحتوي أحرف
    if (!/[A-Za-z]/.test(username)) {
        alert("اسم المستخدم يجب أن يحتوي على أحرف");
        return false;
    }

    // فحص كلمة المرور — أرقام فقط
    if (!/^\d+$/.test(password)) {
        alert("كلمة المرور يجب أن تكون أرقام فقط");
        return false;
    }

    // بيانات تسجيل الدخول الصحيحة
    if (username === "web2025" && password === "2025") {

        alert("تم تسجيل الدخول بنجاح 🎉");

        window.location.href = "Home.html"; // الانتقال للصفحة الرئيسية
        return false; // ← مهم جدًا حتى لا يعمل submit للصفحة
    }

    alert("اسم المستخدم أو كلمة المرور غير صحيحة ❌");
    return false;
}



/* ================================
   📩 فحص صفحة اتصل بنا
================================ */
function checkContact() {

    let name  = document.getElementById("cname").value.trim();
    let email = document.getElementById("cemail").value.trim();
    let phone = document.getElementById("cphone").value.trim();
    let msg   = document.getElementById("cmsg").value.trim();

    if (name === "") {
        alert("الرجاء إدخال الاسم");
        return false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        alert("الرجاء إدخال بريد إلكتروني صحيح");
        return false;
    }

    if (phone.length < 9 || phone.length > 10 || !/^\d+$/.test(phone)) {
        alert("الرجاء إدخال رقم هاتف صحيح (أرقام فقط)");
        return false;
    }

    if (msg.length < 5) {
        alert("الرسالة يجب أن تكون أطول من 5 أحرف");
        return false;
    }

    alert("✔ تم إرسال رسالتك بنجاح");
    return true;
}
