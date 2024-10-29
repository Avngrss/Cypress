const { merge } = require('mochawesome-merge');
const { create } = require('mochawesome-report-generator');

merge({
  files: ['./mochawesome-report/*.json'] // Укажите путь к вашим JSON-файлам
})
.then((report) => {
  return create(report);
})
.then(() => {
  console.log('Общий отчет сгенерирован успешно!');
})
.catch((err) => {
  console.error('Ошибка при генерации отчета:', err);
});