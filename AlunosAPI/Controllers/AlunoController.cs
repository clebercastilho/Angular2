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

        public HttpResponseMessage Get(int id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, new { sucesso = true, data = new AlunoModel() });
        }

        public HttpResponseMessage Post(AlunoModel model)
        {
            return null;
        }

        public HttpResponseMessage Delete(int id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, new { sucesso = true });
        }
    }
}
