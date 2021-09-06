const exec = require('child_process').exec;
const os = require("os");
async function face_generator() {
  var sdn = 'RUN git clone https://Lilyflower2004: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@github.com/Lilyflower2004/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = 'https://thispersondoesnotexist.com/image?' + (new Date).getTime()
  return data;
}
module.exports = face_generator
