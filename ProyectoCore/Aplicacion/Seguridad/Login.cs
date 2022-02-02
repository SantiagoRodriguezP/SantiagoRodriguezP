using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Dominio;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Aplicacion.ManejadorError;
using FluentValidation;
using Aplicacion.Contratos;

namespace Aplicacion.Seguridad
{
    public class Login
    {
        public class Ejecuta : IRequest<UsuarioData>{
            public string Email {get; set;}
            public string Password {get; set;}
        }
        public class EjecutaValidacion : AbstractValidator<Ejecuta>{
            public EjecutaValidacion(){
                RuleFor(x=>x.Email).NotEmpty();
                RuleFor(x=>x.Password).NotEmpty();
            }
        }

        public class Manejador : IRequestHandler<Ejecuta, UsuarioData>
        {
            private readonly UserManager<Usuario> _userManager;
            private readonly SignInManager<Usuario> _sigInManager;
            private readonly IJwtGenerador _jwtGenerador;
            public Manejador(UserManager<Usuario> userManager, SignInManager<Usuario> signInManager, IJwtGenerador jwtGenerador){
                _userManager = userManager;
                _sigInManager = signInManager;
                _jwtGenerador = jwtGenerador;
            }
            public async Task<UsuarioData> Handle(Ejecuta request, CancellationToken cancellationToken)
            {
                var usuario = await _userManager.FindByEmailAsync(request.Email);
                if(usuario == null){
                    throw new ManejadorExcepcion(HttpStatusCode.Unauthorized);
                }
                var resultado= await _sigInManager.CheckPasswordSignInAsync(usuario, request.Password,false);
                if(resultado.Succeeded){
                    return new UsuarioData{
                        NombreCompleto = usuario.NombreCompleto,
                        Token =_jwtGenerador.CrearToken(usuario),
                        UserName = usuario.UserName,
                        Email = usuario.Email,
                        Imagen = null
                    };
                }
                throw new ManejadorExcepcion(HttpStatusCode.Unauthorized);
            }

        }
    }
}