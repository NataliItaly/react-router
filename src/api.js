export async function getVans() {
  const res = await fetch("../api/vans");
  console.log(res);
  console.log(res.status);

  if (!res.ok) {
    // it returned status 200 even if no data returned
    throw {
      message: "failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}
