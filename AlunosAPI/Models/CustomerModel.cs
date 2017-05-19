using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AlunosAPI.Models
{
    public class CustomerModel
    {
        public int ID { get; set; } 
        public string PrimeiroNome { get; set; }
        public string Sobrenome { get; set; }
        public string UltimoSobrenome { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }

        public string NomeCompleto
        {
            get
            {
                return string.Format("{0} {1} {2}",
                    this.PrimeiroNome,
                    (string.IsNullOrEmpty(this.Sobrenome) ? string.Empty : this.Sobrenome),
                    this.UltimoSobrenome);
            }
        }
    }
}