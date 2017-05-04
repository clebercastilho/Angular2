using AlunosAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AlunosAPI.Controllers
{
    public class CursoController : ApiController
    {
        #region db simulation
        private List<CursoModel> Cursos = new List<CursoModel>
        {
            new CursoModel
            {
                ID = 1,
                Descricao = "Angular 2",
                Ativo = true
            },
            new CursoModel
            {
                ID = 2,
                Descricao = "Javascript",
                Ativo = true
            },
            new CursoModel
            {
                ID = 3,
                Descricao = "C#",
                Ativo = true
            },
            new CursoModel
            {
                ID = 4,
                Descricao = "Java",
                Ativo = true
            },
            new CursoModel
            {
                ID = 5,
                Descricao = "Cobol",
                Ativo = false
            },
        };
        #endregion

        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(HttpStatusCode.OK, new { success = true, data = Cursos });
        }
    }
}
