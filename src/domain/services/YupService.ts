/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ObjectSchema } from "yup";

export class YupService {
  static useFormYup(schemaValidation: ObjectSchema<any>) {
    return useForm({
      resolver: yupResolver(schemaValidation),
    });
  }
}
