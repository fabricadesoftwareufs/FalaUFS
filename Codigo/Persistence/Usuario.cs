using System;
using System.Collections.Generic;

namespace Persistence
{
    public partial class Usuario
    {
        public byte[] IdUsuario { get; set; }
        public string Cpf { get; set; }
        public string Ativo { get; set; }
        public string Tipo { get; set; }
        public string Email { get; set; }
        public string Nome { get; set; }
        public string TelefonePrincipal { get; set; }
        public string Senha { get; set; }
        public DateTime DtInc { get; set; }
        public DateTime DtAlt { get; set; }
    }
}
