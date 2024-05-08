import {useForm} from "react-hook-form";
import {api} from "../config_axios";
import {useState} from "react";

const Cadastrar_Usuario = () => {
    const {register, handleSubmit,reset} = useForm();
    const [mensagem, setMensagem] = useState("");
    
    const salvar = async(campos) => {
        try{//bloco try captura os erros e trata no Catch
            // api.post = localhost:8080/usuarios
            const resposta = await api.post("/usuarios", campos);
            console.log(resposta.data);
            setMensagem("Usuário cadastrado com sucesso!");
            reset();
        }catch(error){
            console.log("Houve um erro ao cadastrar usuário.",error)
        }
    };

    return(
        <div className="container-fluid bg-dark text-light 
        min-vh-100 d-flex align-items-center">
            <div className="container p-5 bg-light text-dark rounded">
                <h4 className="fst-italic mb-3">Cadastrar Usuário</h4>
                <form onSubmit={handleSubmit(salvar)}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" 
                        id="username" name="username"
                        required
                        autoFocus
                        {...register("username")}
                        />
                    </div>
                    {/* aqui é o segundo campo */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" 
                        id="email" name="email"
                        required
                        {...register("email")}
                        />
                    </div>
                    {/* aqui é o campo senha */}
                    <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" className="form-control" 
                        id="senha" name="senha"
                        required
                        {...register("senha")}
                        />
                    </div>
                    <input type="submit" 
                    className="btn btn-primary mt-3"
                    value="Cadastrar"
                    />
                    <input type="reset" 
                    className="btn btn-primary mt-3"
                    value="Limpar"
                    />
                </form>
                <div className="alert mt-3">{mensagem}</div>
            </div>
        </div>
    );
}
export default Cadastrar_Usuario;