# خطوات رفع المشروع على GitHub

## 1. تهيئة Git في مجلد المشروع

افتح موجه الأوامر (Command Prompt أو Terminal) وانتقل إلى مجلد المشروع:

```
cd "C:\Users\Almustafa\Documents\augment-projects\Personal website"
```

قم بتهيئة Git في المجلد (إذا لم تكن قد فعلت ذلك بالفعل):

```
git init
```

## 2. إضافة الملفات إلى Git

قم بإضافة جميع ملفات المشروع إلى Git:

```
git add .
```

## 3. عمل Commit للتغييرات

قم بعمل commit للتغييرات مع إضافة رسالة وصفية:

```
git commit -m "النسخة الأولى من الموقع الشخصي"
```

## 4. ربط المستودع المحلي بمستودع GitHub

قم بربط المستودع المحلي بمستودع GitHub الذي أنشأته (استبدل `USERNAME` باسم المستخدم الخاص بك و `REPO_NAME` باسم المستودع):

```
git remote add origin https://github.com/USERNAME/REPO_NAME.git
```

## 5. رفع الكود إلى GitHub

قم برفع الكود إلى GitHub:

```
git push -u origin master
```

أو إذا كان الفرع الرئيسي هو `main`:

```
git push -u origin main
```

## 6. التحقق من المستودع

بعد الانتهاء، قم بزيارة صفحة المستودع على GitHub للتأكد من رفع الملفات بنجاح.

## 7. تفعيل GitHub Pages (اختياري)

إذا كنت ترغب في نشر موقعك على الإنترنت مباشرة من GitHub:

1. انتقل إلى صفحة المستودع على GitHub
2. انقر على "Settings"
3. انتقل إلى قسم "Pages" من القائمة الجانبية
4. في قسم "Source"، اختر الفرع الذي تريد النشر منه (عادة `main` أو `master`)
5. انقر على "Save"

ملاحظة: لنشر تطبيق React على GitHub Pages، قد تحتاج إلى بعض الإعدادات الإضافية:

1. قم بتثبيت حزمة `gh-pages`:
   ```
   npm install --save-dev gh-pages
   ```

2. أضف هذه السطور إلى ملف `package.json`:
   ```json
   "homepage": "https://USERNAME.github.io/REPO_NAME",
   "scripts": {
     // ... السكربتات الأخرى
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. قم بتنفيذ الأمر:
   ```
   npm run deploy
   ```

4. في إعدادات GitHub Pages، اختر فرع `gh-pages` كمصدر.

## ملاحظات هامة

- تأكد من إكمال إعداد EmailJS قبل نشر الموقع.
- تأكد من تحديث معرف القالب ومفتاح API العام في ملف `src/components/Contact.tsx`.
- إذا كنت تستخدم متغيرات بيئية حساسة، فكر في استخدام ملف `.env.local` (وهو مستثنى تلقائيًا من Git) لتخزينها.
