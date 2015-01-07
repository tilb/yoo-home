module ApplicationHelper
  def title(title)
    @page_title = title
  end
  
  def javascript(filename)
    content_for :javascript do
      javascript_include_tag filename
    end
  end

  def stylesheet(filename)
    content_for :stylesheet do
      stylesheet_link_tag filename
    end
  end
end
