export type univ = {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  state_province?: string;
  web_pages: string[];
  imgUrl: string;
  paragrapgh: string;
  chartData: string;
};

export const load = async ({ fetch }) => {
  const res = await fetch("https://jittery-bat-cap.cyclic.cloud/univ/20");
  const data = await res.json();
  //   console.log(data);
  const universities: univ[] = data.map((n: univ) => {
    return {
      alpha_two_code: n.alpha_two_code,
      state_province: n.state_province,
      web_pages: n.web_pages,
      domains: n.domains,
      country: n.country,
      name: n.name,
      imgUrl: n.imgUrl,
      paragrapgh: n.paragrapgh,
      chartData: n.chartData,
    };
  });
  return {
    universities,
  };
};
