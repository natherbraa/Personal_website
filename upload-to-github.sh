#!/bin/bash

echo "===== رفع المشروع على GitHub ====="
echo

echo "الخطوة 1: تهيئة Git في المجلد"
git init
echo

echo "الخطوة 2: إضافة الملفات إلى Git"
git add .
echo

echo "الخطوة 3: عمل Commit للتغييرات"
read -p "أدخل رسالة الـ Commit (الافتراضي: النسخة الأولى من الموقع الشخصي): " commit_message
commit_message=${commit_message:-"النسخة الأولى من الموقع الشخصي"}
git commit -m "$commit_message"
echo

echo "الخطوة 4: ربط المستودع المحلي بمستودع GitHub"
read -p "أدخل اسم المستخدم الخاص بك على GitHub: " github_username
read -p "أدخل اسم المستودع الذي أنشأته على GitHub: " repo_name
git remote add origin https://github.com/$github_username/$repo_name.git
echo

echo "الخطوة 5: رفع الكود إلى GitHub"
echo "اختر الفرع الرئيسي:"
echo "1. master"
echo "2. main"
read -p "اختر رقم الفرع (الافتراضي: 1): " branch_choice
if [ "$branch_choice" = "2" ]; then
    git push -u origin main
else
    git push -u origin master
fi
echo

echo "تم الانتهاء! يمكنك الآن زيارة صفحة المستودع على GitHub:"
echo "https://github.com/$github_username/$repo_name"
echo

echo "لتفعيل GitHub Pages، اتبع التعليمات في ملف github-upload.md"
echo

read -p "اضغط Enter للخروج..."
