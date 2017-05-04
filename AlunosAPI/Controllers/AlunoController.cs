using AlunosAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AlunosAPI.Controllers
{
    public class AlunoController : ApiController
    {
        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(HttpStatusCode.OK, new { sucesso = true, data = new List<AlunoModel>() });
        }

        public HttpResponseMessage Delete(int id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, new { sucesso = true });
        }
    }
}
