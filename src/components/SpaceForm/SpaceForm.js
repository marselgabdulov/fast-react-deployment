import * as yup from "yup";
import { withFormik } from "formik";
import { isCyrillic } from "../../helpers/formHelpers";
import InnerForm from "./InnerForm/InnerForm";

const FILE_SIZE = 320 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const SpaceForm = withFormik({
  mapPropsToValues({
    firstNameCyrillic,
    firstNameLatin,
    lastNameCyrillic,
    lastNameLatin,
    email,
    phoneNumber,
    personalPhoto,
    rocketPhoto,
    nameOfRocket,
    engineСapacity,
    backFromBlackHole,
    chanceToBack,
    haveRecord,
    loadSpeed,
    modalIsVisible
  }) {
    return {
      firstNameCyrillic: firstNameCyrillic || "",
      firstNameLatin: firstNameLatin || "",
      lastNameCyrillic: lastNameCyrillic || "",
      lastNameLatin: lastNameLatin || "",
      email: email || "",
      phoneNumber: phoneNumber || "",
      personalPhoto: personalPhoto || "",
      rocketPhoto: rocketPhoto || "",
      nameOfRocket: nameOfRocket || "",
      engineСapacity: engineСapacity || "",
      backFromBlackHole: backFromBlackHole || false,
      chanceToBack: chanceToBack || "",
      haveRecord: haveRecord || "",
      loadSpeed: loadSpeed || "",
      modalIsVisible: modalIsVisible || false
    };
  },

  validationSchema: yup.object().shape({
    firstNameCyrillic: yup
      .string()
      .test("isCyrillic", "Заполняйте кириллицей", val => isCyrillic(val))
      .required("Обязательно к заполнению"),
    firstNameLatin: yup.string().required("Обязательно к заполнению"),
    lastNameCyrillic: yup.string().required("Обязательно к заполнению"),
    lastNameLatin: yup.string().required("Обязательно к заполнению"),
    email: yup
      .string()
      .email("Недопустимый формат")
      .required("Обязательно к заполнению"),
    phoneNumber: yup.string().required("Обязательно к заполнению"),
    personalPhoto: yup
      .mixed()
      .required("Обязательно к заполнению")
      .test(
        "fileSize",
        "Файл должен быть не более 320kb",
        value => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Только изображения в формате jpg/jpeg/gif/png",
        value => value && SUPPORTED_FORMATS.includes(value.type)
      ),
    rocketPhoto: yup
      .mixed()
      .required("Обязательно к заполнению")
      .test(
        "fileSize",
        "Файл должен быть не более 320kb",
        value => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Только изображения в формате jpg/jpeg/gif/png",
        value => value && SUPPORTED_FORMATS.includes(value.type)
      ),
    nameOfRocket: yup.string().required("Обязательно к заполнению"),
    engineСapacity: yup
      .number()
      .typeError("Только числовые значения")
      .positive("Только позитивные значения")
      .required("Обязательно к заполнению"),
    backFromBlackHole: yup.boolean(),
    chanceToBack: yup.string(),
    haveRecord: yup.string().required("Обязательно к заполнению"),
    loadSpeed: yup
      .number()
      .typeError("Только числовые значения")
      .positive("Только позитивные значения")
      .required("Обязательно к заполнению")
  }),
  handleSubmit: (values, { setSubmitting, setValues }) => {
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      const payload = { ...values, modalIsVisible: true };
      setValues(payload);
      setSubmitting(false);
    }, 1000);
  }
})(InnerForm);
