using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AlunosAPI.Models
{
    public class AlunoModel
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public int Idade { get; set; }
        public string Curso { get; set; }
    }
}