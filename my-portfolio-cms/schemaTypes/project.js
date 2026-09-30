export default {
  name: 'project',
  title: 'المشاريع',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'اسم المشروع',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'الرابط المختصر (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'وصف المشروع',
      type: 'text',
    },
    {
      name: 'image',
      title: 'صورة المشروع',
      type: 'image',
      options: {
        hotspot: true, // عشان تقدر تقص الصورة وتحدد الأجزاء الظاهرة منها براحتك
      },
    },
    {
      name: 'techStack',
      title: 'الأدوات والتقنيات المستخدمة',
      type: 'array',
      of: [{ type: 'string' }], // هيديك حرية تكتب كل أداة لوحدها زي React, Tailwind, Node.js
    },
    {
      name: 'liveUrl',
      title: 'رابط الديمو (Live Demo)',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'رابط جيت هاب (GitHub)',
      type: 'url',
    },
  ],
}