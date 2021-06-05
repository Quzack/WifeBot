//cleaner with embeds / requires command manager

module.exports = {
    name: 'staff',
    description: "Displays all online staff",
    execute(message,args,Discord){
        const noStaff = new Discord.MessageEmbed().setColor("##ffffed").addFields({name: "No staff!", value: "There are no online staff available at the moment :("})
        const Staffrole = "848478990317518858"//staff id
        var onlineStaff = message.guild.roles.cache.get(Staffrole).members.filter(mem => mem.presence.status === 'online').map(mem => mem.user);
        const StaffList = new Discord.MessageEmbed().setColor("#ffffed").addFields({name: "Online staff", value: "Staff: " + onlineStaff }).setFooter("Pinged by: " + message.author.tag)
        if(!Object.keys(onlineStaff).length > 0) {return message.channel.send(noStaff) }
        else{
            message.channel.send(StaffList)
        }
        
    }
}
