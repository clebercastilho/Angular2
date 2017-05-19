using AlunosAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AlunosAPI.Controllers
{
    public class CustomerController : ApiController
    {
        public HttpResponseMessage Get()
        {
            var lista = new CustomersRepository().Listar();
            var response = new { sucesso = true, data = lista };

            return Request.CreateResponse(HttpStatusCode.OK, response);
        }
    }
}
