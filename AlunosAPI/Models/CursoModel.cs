using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AlunosAPI.Models
{
    public class CursoModel
    {
        public int ID { get; set; }
        public string Descricao { get; set; }
        public bool Ativo { get; set; }
    }
}