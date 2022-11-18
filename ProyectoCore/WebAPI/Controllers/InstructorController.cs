using System.Collections.Generic;
using System.Threading.Tasks;
using Aplicacion.Instructores;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistencia.DapperConexion.Instructor;
using SincoSoft.Context.Core.Security;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
     [ApiController]
    public class InstructorController : ControllerBase
    {
        private IMediator   _mediator;
        public InstructorController(IMediator mediator){
            _mediator = mediator;
        }
        
        [HttpGet]
        [TokenAuthorization]
        public async Task<ActionResult<List<InstructorModel>>> ObtenerInstructores()
        {
            return await _mediator.Send(new Consulta.Lista());
        }
    }
}