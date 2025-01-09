import axios from "axios";
import { pegarUsuarioPorId, criarUsuario } from "../src/Usuarios";

describe("Ao pegar um usuário por Id", () => {
    test("Deve pegar um usuário por Id", async () => {
        const obj = {
            name: "Fulano",
            email: "mail@mail.com",
            website: "https://site.com",
        };
        axios.get = jest.fn().mockResolvedValue({
            data: {
                ...obj,
            },
        });
        const usuario = await pegarUsuarioPorId(1);
        expect(usuario).toMatchObject({ ...obj });
    });

    test("Deve lançar um erro ao passar um id negativo", () => {
        const busca = () => pegarUsuarioPorId(-1)
        expect(busca).rejects.toThrow("Id não pode ser negativo")
    });

    test("Deve lançar um erro ao passar um id inexistente", async () => {
        axios.get = jest.fn().mockRejectedValue(new Error)
        const busca = () => pegarUsuarioPorId(999)
        await expect(busca).rejects.toThrow("Não foi possível recuperar o usuário")
    });

    test("Deve trazer um website inválido ao receber um website .biz", async () => {
        const obj = {
            name: "Fulano",
            email: "mail@mail.biz",
            website: "INVÁLIDO"
        }
        axios.get = jest.fn().mockResolvedValue({
            data: {
                ...obj
            }
        })
        const usuario = await pegarUsuarioPorId(1)
        expect(usuario).toMatchObject({...obj, email: "INVÁLIDO", website: "INVÁLIDO"})
    });

    test("Deve trazer um email inválido ao receber um email sem .com", async () => {
        const obj = {
            name: "Fulano",
            email: "mail@mail.org",
            website: "INVÁLIDO"
        }
        axios.get = jest.fn().mockResolvedValue({
            data: {
                ...obj
            }
        })
        const usuario = await pegarUsuarioPorId(1)
        expect(usuario).toMatchObject({...obj, email: "INVÁLIDO"})
    });
    });

describe("Ao criar um usuário", () => {
    const usuarioPadrao = {
        name: "Fulano",
        email: "fulano@mail.com",
        website: "http://www.fulano.com"
    }
    test("Deve lançar um erro ao criar um usuário sem nome", async() => {
        const criacao = () => criarUsuario({...usuarioPadrao, name: ""})
        await expect(criacao).rejects.toThrow("Usuário inválido")
    });

    test("Deve lançar um erro ao criar um usuário sem email", async () => {
        const criacao = () => criarUsuario({...usuarioPadrao, email: ""})
        await expect(criacao).rejects.toThrow("Usuário inválido")
    });

    test("Deve lançar um erro ao criar um usuário sem website", async() => {
        const criacao = () => criarUsuario({...usuarioPadrao, website: ""})
        await expect(criacao).rejects.toThrow("Usuário inválido")
    });

    test("Deve lançar um erro ao criar um usuário com id", async() => {
        const criacao = () => criarUsuario({...usuarioPadrao, id: "1000"})
        await expect(criacao).rejects.toThrow("Usuário não pode ter id")
    });

    test("Deve inserir um usuário com nome, email e website", async() => {
        axios.post = jest.fn().mockResolvedValue({
            data: {...usuarioPadrao}
        })
        const usuario = await criarUsuario(usuarioPadrao)
        expect(usuario).toEqual({
            ...usuarioPadrao,
            address: "INVÁLIDO",
            phone: "INVÁLIDO",
            company: "INVÁLIDO"
        })

    });

    test("Deve inserir um usuário com nome, email, website, endereço, telefone e companhia", async() => {
        const usuarioInicial = {
            ...usuarioPadrao,
             address: "Rua 123",
            phone: "9 9999-9999",
            company: "Typescript Test"
            
        }
        axios.post = jest.fn().mockResolvedValue({
            data: {...usuarioInicial}
        })
        const usuario = await criarUsuario(usuarioPadrao)
        expect(usuario).toEqual(usuarioInicial)
    });
});
