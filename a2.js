function thongbao() {
  const v = document.getElementById("msg").value;
  alert(v);
  const d = new Date();

  let st = `Hôm nay ngày: ${d.getDate()} tháng: ${d.getMonth() + 1} năm: ${d.getFullYear()}`;
  alert(st);
}
