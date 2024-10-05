import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { instance } from "../api/api";
import toast from "react-hot-toast";
import { addToLS } from "./localstorageHook";

const notify = (type = "ok", text) => {
  if (type === "ok") {
    toast.success(text || "Tayyor");
  } else if (type === "err") {
    toast.error(text || "Xato");
  } else if (type === "wait") {
    toast.loading(text || "Kuting...");
  }
};

export const useSignUp = ({ setIsSuccess, setUsername, onSuccess }) => {
  const mutation = useMutation({
    mutationFn: (data) => instance.post("/account/register/", data),
    onSuccess: (data) => {
      setIsSuccess(true);
      setUsername(data?.data?.username);
      if (onSuccess) {
        notify("ok", "Yaxshi, Endi accountni tasdiqlang");
        onSuccess();
      }
    },
    onError: (error) => {
      console.log(error);
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (errorData.username) {
          if (
            errorData.username == "A user with that username already exists."
          ) {
            notify("err", `Username Oldin ishlatilgan`);
          } else {
            notify("err", `Username xatolik: ${errorData.username[0]}`);
          }
        } else if (errorData.email) {
          notify("err", `Email xatolik: ${errorData.email[0]}`);
        } else if (errorData.password) {
          notify("err", `Password xatolik: ${errorData.password[0]}`);
        } else {
          notify(
            "err",
            "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
          );
        }
      } else {
        notify(
          "err",
          "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
        );
      }
    },
  });

  return mutation;
};

export const useSignIn = (onSuccess, onError) => {
  return useMutation({
    mutationFn: (data) => instance.post("/account/login/", data), // API ga so'rov yuborish
    onSuccess: (data) => {
      addToLS("access", data?.data?.access); // Tokenni saqlash

      if (onSuccess) {
        toast.success("Hisobga kirdingiz"); // Muvaffaqiyatli xabar
        onSuccess(); // Agar onSuccess berilgan bo'lsa, chaqiramiz
      }
    },
    onError: (error) => {
      console.log(error);
      if (onError) {
        onError(error); // Agar onError berilgan bo'lsa, chaqiramiz
      } else {
        toast.error(
          "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
        );
      }
    },
  });
};

export const useVerify = (onSuccess) => {
  // onSuccess ni parametr sifatida olamiz
  const mutation = useMutation({
    mutationFn: (data) => instance.post("/account/verify/", data),
    onSuccess: (data) => {
      if (onSuccess) {
        addToLS("access", data?.data?.access);
        toast.success("Tasdiqlandi va Hisobga kirildi"); // Xabarning muvaffaqiyatli bo'lishi
        onSuccess(); // Agar onSuccess berilgan bo'lsa, chaqiramiz
      }
    },
    onError: (error) => {
      console.log(error);
      toast.error("Verifikatsiya xato. Iltimos, qayta urinib ko'ring.");
    },
  });

  return mutation; // mutation ob'ektini qaytaramiz
};

export const useGetGroup = () => {
  // useGetGroup deb nomlang
  return useQuery({
    queryKey: ["getGroup"],
    queryFn: () => instance.get("/account/groupsatt/"),
    refetchOnWindowFocus: false,
    select: (data) => data.data,
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });
};
