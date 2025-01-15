const form = document.querySelector("#login-form");

let accessToken = null;

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  accessToken = data.access_token;

  if (res.status === 200) {
    const infoDiv = document.querySelector("#info");
    infoDiv.innerText = "로그인 되었습니다!";

    const btn = document.createElement("button");
    btn.innerText = "상품 가져오기";
    btn.type = "button";
    btn.addEventListener("click", async () => {
      const res = await fetch("/items", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await res.json();
      console.log(data);
    });
    infoDiv.appendChild(btn);
  }

  //   console.log("액세스토큰!!", data);
  //   if (res.status === 200) {
  //     alert("로그인에 성공했습니다.");
  //     window.location.pathname = "/";
  //     console.log(res.status);
  //   } else if (res.status === 401) {
  //     alert("로그인에 실패했습니다.");
  //   }
};

form.addEventListener("submit", handleSubmit);
