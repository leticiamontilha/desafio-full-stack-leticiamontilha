import { TypeOf, z } from "zod"


export const registerContactSchema = z.object({
    name: z.string().min(3, "O texto deve ter pelo menos 3 caracteres").max(10, "O texto só pode conter até caracteres" ).nonempty("O nome é obrigatório"),
    email: z.string().email("Deve ser um email"),
    phone_number: z.string().min(3).max(11).nonempty("O numero de telefone é obrigatório")
})

export const updateContactSchema = registerContactSchema.partial()

export type RegisterContactData = z.infer<typeof registerContactSchema>
export type UpdateContactData = z.infer<typeof updateContactSchema>