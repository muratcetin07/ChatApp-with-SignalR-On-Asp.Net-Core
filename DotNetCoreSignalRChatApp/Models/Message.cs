using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreSignalRChatApp.Models
{
    public class Message
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(50)]
        public string Nickname { get; set; }
        [MaxLength(144)]
        public string Text { get; set; }
    }
}
