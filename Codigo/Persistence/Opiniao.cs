using System;
using System.Collections.Generic;

namespace Persistence
{
    public partial class Opiniao
    {
        public byte[] IdOpiniao { get; set; }
        public string Comentario { get; set; }
        public int Negativos { get; set; }
        public int Positivos { get; set; }
        public string Visivel { get; set; }
        public DateTimeOffset DtInc { get; set; }
        public DateTimeOffset DtAlt { get; set; }
    }
}
