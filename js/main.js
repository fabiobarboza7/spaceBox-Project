const getData = async () => {
  const res = await fetch('./../db/data.json');
  const data = await res.json();
  console.log(data);
}

getData();
