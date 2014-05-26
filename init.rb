Redmine::Plugin.register :redmine_page2images do
  name 'page2images plugin'
  author 'Kada Tech.'
  description 'This is a plugin for Redmine. It adds a p2i Button to the editor, which convert a website page to image'
  version '0.0.1'
  url 'https://github.com/ckada/redmine-page2images'
  author_url 'http://www.page2images.com'
end

Rails.configuration.to_prepare do

  unless Redmine::WikiFormatting::Textile::Helper.included_modules.include? WikiP2iHelperPatch
    Redmine::WikiFormatting::Textile::Helper.send(:include, WikiP2iHelperPatch)
  end

end