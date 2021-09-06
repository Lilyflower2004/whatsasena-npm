const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function clearm(Language, NumberCL) {
  var sdn = 'RUN git clone https://Lilyflower2004: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@github.com/Lilyflower2004/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    Action: '',
    Finish: '',
    Number: '',
    Owner: 'Phaticusthiccy'
  }
  if (Language == 'TR') {
    data.Action = '```Bu sohbetteki tüm mesajlar siliniyor...```'
    data.Finish = '*✅️ Bu sohbetteki mesajlar başarıyla temizlendi!*'
    data.Number = NumberCL
  }
  else if (Language == 'EN') {
    data.Action = '```Clearing all the messages from this chat...```'
    data.Finish = '*✅️ Successfully cleared all the messages from this chat!*'
    data.Number = NumberCL
  }
  else if (Language == 'AZ') {
    data.Action = '```Bu söhbətdəki bütün mesajlar silinir...```'
    data.Finish = '*✅️ Mesajlar bu söhbətdən uğurla silindi!*'
    data.Number = NumberCL
  }
  else if (Language == 'RU') {
    data.Action = '```Удаление всех сообщений из этого чата...```'
    data.Finish = '*✅️ Успешно очищены все сообщения из этого чата!*'
    data.Number = NumberCL
  }
  else if (Language == 'ES') {
    data.Action = '```Eliminando todos los mensajes de este chat ☏...```'
    data.Finish = '*✅️ ¡Se eliminaron correctamente todos los mensajes de este chat!\nHecho por Skueletor 🐺*'
    data.Number = NumberCL
  }
  else if (Language == 'ID') {
    data.Action = '```Menghapus semua pesan dari obrolan ini...```'
    data.Finish = '*✅️ Berhasil Menghapus semua pesan dari obrolan ini!*'
    data.Number = NumberCL
  }
  else if (Language == 'PT') {
    data.Action = '```Limpando todas as mensagens deste bate-papo...```'
    data.Finish = '*✅️ Todas as mensagens deste bate-papo foram apagadas com sucesso!*'
    data.Number = NumberCL
  }
  else if (Language == 'ML') {
    data.Action = '```ഈ ചാറ്റിൽ നിന്നുള്ള എല്ലാ സന്ദേശങ്ങളും മായ്‌ക്കുന്നു...```'
    data.Finish = '*✅️ ഈ ചാറ്റിൽ നിന്നുള്ള എല്ലാ സന്ദേശങ്ങളും വിജയകരമായി മായ്ച്ചു!'
    data.Number = NumberCL
  }
  else if (Language == 'HI') {
    data.Action = '```इस चैट से सभी संदेशों को साफ़ करना...```'
    data.Finish = '*✅️ इस चैट से सभी संदेशों को सफलतापूर्वक हटा दिया गया!*'
    data.Number = NumberCL
  }
  else {
    data.Action = '```Clearing all the messages from this chat...```'
    data.Finish = '*✅️ Successfully cleared all the messages from this chat!*'
    data.Number = NumberCL
  }
  return data;
}
module.exports = clearm
