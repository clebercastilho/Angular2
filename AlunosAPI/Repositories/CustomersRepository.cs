using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AlunosAPI.Models;
using System.Configuration;
using System.Data.SqlClient;
using Dapper;

namespace AlunosAPI.Repositories
{
    public class CustomersRepository
    {
        private string dbConnectionString = ConfigurationManager.ConnectionStrings["AdventureWorks"].ToString();

        public List<CustomerModel> Listar()
        {
            var clientes = new List<CustomerModel>();

            using (var conn = new SqlConnection(dbConnectionString))
            {
                var query = @"SELECT top 100
	                            P.BusinessEntityID as ID,
	                            P.FirstName as PrimeiroNome,
	                            P.MiddleName as Sobrenome,
	                            P.LastName as UltimoSobrenome,
	                            PP.PhoneNumber as Telefone,
	                            E.EmailAddress as Email
                            FROM
	                            Person.Person P
	                            inner join Person.PersonPhone PP on PP.BusinessEntityID = P.BusinessEntityID
	                            inner join Person.EmailAddress E on E.BusinessEntityID = P.BusinessEntityID";

                var result = conn.Query<CustomerModel>(query);
                if (result.Any())
                    clientes = result.ToList();
            }

            return clientes;
        }
    }
}