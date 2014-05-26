require_dependency "redmine/wiki_formatting/textile/helper"

module WikiP2iHelperPatch
  def self.included(base) # :nodoc:
    base.send(:include, HelperMethodsWikiExtensions)

    base.class_eval do
      unloadable # Send unloadable so it will not be unloaded in development    
      alias_method_chain :heads_for_wiki_formatter, :redmine_page2images
    end
  end

end

module HelperMethodsWikiExtensions
  def heads_for_wiki_formatter_with_redmine_page2images
    heads_for_wiki_formatter_without_redmine_page2images
    return if ie6_or_ie7?

    unless @heads_for_wiki_redmine_page2images_included
      content_for :header_tags do
        o = javascript_include_tag('jquery-1.7.2.min.js', :plugin => 'redmine_page2images')
	o << javascript_include_tag('wiki-page2images-key.js', :plugin => 'redmine_page2images')
	o << javascript_include_tag('wiki-page2images.js', :plugin => 'redmine_page2images')
        o << stylesheet_link_tag('wiki-page2images.css', :plugin => 'redmine_page2images')
        o.html_safe
      end
      @heads_for_wiki_redmine_page2images_included = true
    end
  end
  private
  def ie6_or_ie7?
    useragent = request.env['HTTP_USER_AGENT'].to_s
    return useragent.match(/IE[ ]+[67]./) != nil
  end


end


