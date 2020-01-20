users = {
    model : models.users,

    getOne: function(req, res) {
      (!res)
        ? db.find(model, req.params.IDUser, {target: this.getOne})
        : console.log(res)
    },

    getMany: function(req, res) {
      (!res)
        ? db.get(model, '*', {target: this.getMany})
        : console.log(res)
    },

    save: function(req, res) {
      (!res)
        ? db.save(model, {target: this.save})
        : response('data saved!')
    },

    delete: function (req, res) {
      (!res)
        ? db.delete(model, res.params.IDUser, {target: this.delete})
        : response('data deleted!')
    },
    frontEnd : {
      user : {
        routeView : '/user/:IDUser',
        includes : {},
        bindings : {
          isLoading : false,
          dataProduct : null
        },
        methods : {},
        template : function(){
          return ''
             + this.includes.header
             + $include('uiTemplate.header')
             + (()=>`<section></section>`) // TODO
             + $include('uiTemplate.footer')
        }
      }
    }
  }